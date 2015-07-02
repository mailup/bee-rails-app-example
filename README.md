# Bee Plugin Rails Application Example

This is an example application for integrating MailUp BEE Plugin.

For details on how the plugin works, please consult the documentation:

http://help.beefree.io/hc/en-us


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

