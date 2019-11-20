require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @columns if @columns
    array_col_names=DBConnection.execute2(<<-SQL).first
    select *
    from #{self.table_name}
    SQL
    array_col_names.map!(&:to_sym)
    @columns=array_col_names
  end

  def self.finalize!
    self.columns.each do |col|
      define_method(col) do
       self.attributes[col]
      end

      define_method("#{col}=") do |value|
       self.attributes[col] = value
      end

    end


  end

  def self.table_name=(table_name)
    @table_name=table_name
  end

  def self.table_name
    name=self.to_s.tableize.singularize
    name+="s"
      @table_name=name
  end

  def self.all
    data=DBConnection.execute(<<-SQL)
    select
      #{self.table_name}.*
    from
      #{self.table_name}
    SQL
    self.parse_all(data)
  end

  def self.parse_all(results)
    all_objects=[]
    results.each do |pending_obj|
      all_objects<<self.new(pending_obj)
    end
    all_objects
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    params.each do |attr_name,value|
      attr_name=attr_name.to_sym
      if self.class.columns.include?(attr_name)
        self.send("#{attr_name}=",value)
      else
        raise "unknown attribute '#{attr_name}'"
      end
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
