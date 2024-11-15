require "test_helper"

class CartsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get carts_index_url
    assert_response :success
  end

  test "should get show" do
    get carts_show_url
    assert_response :success
  end

  test "should get create" do
    get carts_create_url
    assert_response :success
  end

  test "should get dstroy" do
    get carts_dstroy_url
    assert_response :success
  end
end
