require "test_helper"

class Api::V1::ChairsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_chairs_index_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_chairs_show_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_chairs_create_url
    assert_response :success
  end

  test "should get update" do
    get api_v1_chairs_update_url
    assert_response :success
  end

  test "should get destroyrails" do
    get api_v1_chairs_destroyrails_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_chairs_destroy_url
    assert_response :success
  end

  test "should get controller" do
    get api_v1_chairs_controller_url
    assert_response :success
  end

  test "should get api/v1/chair" do
    get api_v1_chairs_api/v1/chair_url
    assert_response :success
  end
end
