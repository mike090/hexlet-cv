# frozen_string_literal: true

json.id @vacancy.id
json.title @vacancy.title
json.site @vacancy.site
json.country @vacancy.country
json.contact_email @vacancy.contact_email
json.contact_name @vacancy.contact_name
json.contact_telegram @vacancy.contact_telegram
json.contact_phone @vacancy.contact_phone
json.link_for_contact @vacancy.link_for_contact
json.position_level_text @vacancy.position_level.text
json.employment_type_text @vacancy.employment_type.text
json.company_name @vacancy.company_name
json.description @vacancy.description