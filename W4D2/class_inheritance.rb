class Employee
  def initialize(name, title, salary, boss)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
    if @boss
      @boss.employees << self
    end
  end

  def bonus(mult)
    @bonus = @salary * mult
    return @bonus
  end

  attr_reader :salary
end

class Manager < Employee
  def initialize(name, title, salary, boss)
    super
    @employees = []
  end

  def bonus(mult)
    return 0 if @employees.empty?
    total_sub_salary = 0
    @employees.each { |emp| emp.is_a?(Manager) ? total_sub_salary += (emp.bonus(1) + emp.salary) : total_sub_salary += emp.salary }
    @bonus = total_sub_salary * mult
    @bonus
  end

  attr_accessor :employees
end


ned = Manager.new("Ned", "Founder", 1000000, nil)
darren = Manager.new("Darren", "TA Manager", 78000, ned)
shawna = Employee.new("Shawna", "TA", 12000, darren)
david = Employee.new("David", "TA", 10000, darren)
p ned.bonus(5)
p darren.bonus(4)
p david.bonus(3)