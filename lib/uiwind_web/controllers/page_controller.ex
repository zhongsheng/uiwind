defmodule UiwindWeb.PageController do
  use UiwindWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
