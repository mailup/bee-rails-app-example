# Bee Plugin Rails Application Example

This is an example application for integrating MailUp BEE Plugin inside a Rails app.

For details on how the plugin works, please consult the documentation:

http://help.beefree.io/hc/en-us

To request a beta account to try the BEE Plugin, head to [beefree.io](https://beefree.io) and click "Embed BEE in your app" in the top navigation bar


# Getting Started

Clone the repo from git:

    git clone https://github.com/mailup/bee-rails-app-example.git
    cd bee-rails-app-example

Edit `config/secrets.yml` file with your BEE credentials.

```
bee:
  client_id: <bee_client_id>
  client_secret: <bee_client_secret>
```

Install the gems:

    bundle install

Run the server:

     rails server

To see the editor go to:

    http://127.0.0.1:3000/

# Customization

* You can select what template to load by editing one line. [See here](/app/controllers/bee_controller.rb#L3)

* You can set and customize all plugin callbacks and configuration by editing [bee.js](/app/assets/javascripts/bee.js)

