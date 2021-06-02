class Api::DummiesController < ApplicationController

  def index
    render json: Dummy.all
  end

end
