# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

# Configures the endpoint
config :uiwind, UiwindWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "djQUUKH69pzJKltwsbd0EYB/46UxA0aWuES1+eTiGZlfb2FyzOX5CsqPp0kznErZ",
  render_errors: [view: UiwindWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Uiwind.PubSub,
  live_view: [signing_salt: "/EJnQNwx"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
