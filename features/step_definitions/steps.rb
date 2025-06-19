Given("I visit the homepage") do
  visit ENV['APP_URL']
end

Then("I should see {string}") do |text|
  expect(page).to have_content(text)
end
