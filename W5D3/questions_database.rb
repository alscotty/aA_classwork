require "singleton"
require 'sqlite3'
require 'byebug'
class QuestionsDatabase < SQLite3::Database
  include Singleton
  def initialize
    super('questions.db')
     self.type_translation = true
    self.results_as_hash = true
  end

end

class Question 
  attr_accessor :title, :body
  def self.find_by_id(id)
    todd = QuestionsDatabase.instance.execute(<<-SQL,id)
    SELECT
    *
    FROM 
    question
    WHERE id = ?
    SQL
    Question.new(todd[0])

  end

  def self.find_by_author_id(author_id)
    todd = QuestionsDatabase.instance.execute(<<-SQL,author_id)
    SELECT
    *
    FROM 
    question
    WHERE id = ?
    SQL
    Question.new(todd[0])

  end



  def initialize(options)
    @title = options['title']
    @body = options['body']
  end
end

class User
  attr_accessor :fname, :lname

  def self.all
    data = QuestionsDatabase.instance.execute(<<-SQL)
    SELECT
    *
    FROM
    user
    SQL
    data.map {|datum| User.new(datum)}
  end

  def self.find_by_name(fname, lname)
    id = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
    SELECT
    *
    FROM 
    user
    where 
    fname = ? and lname = ?
    SQL
    
    User.new(id[0])
  end

  def initialize(options)
    @fname = options['fname']
    @lname = options['lname']
  end

end

class Replies

  def self.find_by(user_id)
 id = QuestionsDatabase.instance.execute(<<-SQL, user_id)
    SELECT
    *
    FROM 
    replies
    where 
    user_id = ?
    SQL
    
    Replies.new(id[0])

  end

  def initialize(options)
    @user_id = options["user_id"]
    @question_id = options["question_id"]
  end



end

class Question_Follows
  def self.find_by(user_id)
      id = QuestionsDatabase.instance.execute(<<-SQL, user_id)
          SELECT
          *
          FROM 
          question_follows
          where 
          user_id = ?
          SQL
          
      Question_Follows.new(id[0])

  end

  def initialize(options)
    @user_id = options["user_id"]
    @question_id = options["question_id"]
  end


end

class Question_likes
  def self.find_by(user_id)
 id = QuestionsDatabase.instance.execute(<<-SQL, user_id)
    SELECT
    *
    FROM 
      question_likes
    where 
    user_id = ?
    SQL
    
    Question_likes.new(id[0])

  end

  def initialize(options)
    @user_id = options["user_id"]
    @question_id = options["question_id"]
  end


end
