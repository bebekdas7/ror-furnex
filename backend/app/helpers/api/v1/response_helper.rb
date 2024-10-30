module Api
  module V1
    module ResponseHelper
      #200 ok
      def success_response(data, message = nil)
        render json: {data: data, message: message, status: 200}, status: :ok
      end

      #201 created
      def created_response(data, message: nil)
        render json: { data: data, message: message, status: 201 }, status: :created
      end

      # 202 Accepted
      def accepted_response(data, message = "Request accepted")
        render json: { data: data, message: message, status: 202 }, status: :accepted
      end

      # 400 Bad Request
      def bad_request_response(error_messages = "Bad request")
        render json: { errors: Array(error_messages), status: 400 }, status: :bad_request
      end

      # 401 Unauthorized
      def unauthorized_response(error_message = "Unauthorized access")
        render json: { errors: Array(error_message), status: 401 }, status: :unauthorized
      end

      # 403 Forbidden
      def forbidden_response(error_message = "Access forbidden")
        render json: { errors: Array(error_message), status: 403 }, status: :forbidden
      end

      # 404 Not Found
      def not_found_response(error_message = "Resource not found")
        render json: { errors: Array(error_message), status: 404 }, status: :not_found
      end

      # 422 Unprocessable Entity
      def unprocessable_entity_response(error_messages)
        render json: { errors: Array(error_messages), status: 422 }, status: :unprocessable_entity
      end

      # 500 Internal Server Error
      def internal_server_error_response(error_message = "Internal server error")
        render json: { errors: Array(error_message), status: 500 }, status: :internal_server_error
      end
    end
  end
end