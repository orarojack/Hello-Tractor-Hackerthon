# == Schema Information
#
# Table name: messages
#
#  id          :uuid             not null, primary key
#  content     :text
#  item_type   :string
#  send_at     :datetime
#  status      :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  item_id     :bigint
#  receiver_id :uuid             not null
#  sender_id   :uuid             not null
#
# Indexes
#
#  index_messages_on_item         (item_type,item_id)
#  index_messages_on_receiver_id  (receiver_id)
#  index_messages_on_sender_id    (sender_id)
#
# Foreign Keys
#
#  fk_rails_...  (receiver_id => users.id)
#  fk_rails_...  (sender_id => users.id)
#
require 'rails_helper'

RSpec.describe Message, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
