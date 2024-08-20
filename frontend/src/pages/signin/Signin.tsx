import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  keepLoggedIn: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

function Signin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="w-1/2 bg-blue-50">mustore</div>
      <div className="flex-1 flex flex-col items-center justify-center bg-red-300 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2">Sign in</h1>
        <p className="text-gray-600 mb-6">
          Please login to continue to your account.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="keepLoggedIn"
                {...register("keepLoggedIn")}
                className="mr-2"
              />
              <label htmlFor="keepLoggedIn" className="text-sm text-gray-600">
                Keep me logged in
              </label>
            </div>
            <p className="text-sm text-blue-600 hover:underline">
              Forgot Password
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">or</p>
          <button className="mt-2 w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition duration-300">
            Sign in with MuLearn
          </button>
        </div>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <p
            onClick={() => {
              navigate("/signup");
            }}
            className="text-blue-600 hover:underline"
          >
            Create one
          </p>
        </p>
      </div>
    </div>
  );
}

export default Signin;
