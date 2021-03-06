# == Schema Information
#
# Table name: shortened_urls
#
#  id         :bigint           not null, primary key
#  long_url   :string           not null
#  short_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
# Indexes
#
#  index_shortened_urls_on_long_url_and_short_url  (long_url,short_url) UNIQUE
#

class ShortenedUrl < ApplicationRecord
  validates :long_url,:short_url, presence:true, uniqueness:true
end
