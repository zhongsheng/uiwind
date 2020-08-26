defmodule UiwindWeb.PageView do
  use UiwindWeb, :view

  def render_pre(eex) do
    render("pre.html",
      show: render(eex),
      pre: render_to_string(UiwindWeb.PageView, eex, [])
    )
  end

end
