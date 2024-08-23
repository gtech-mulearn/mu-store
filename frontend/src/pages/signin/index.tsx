import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styles from "./index.module.css"

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
    <div className={`${"flex min-h-screen w-full"} ${styles.mobileFlex}`}>
      <div className={styles.bannerContainer}>
      <div className="h-full w-full relative overflow-hidden bg-[#132972]">
        <img src='/images/signin/mu.svg' alt="background pattern" className="place-self-stretch w-full"/>
        <div className="absolute left-1/2 top-36 sm:top-1/2 md:top-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" >
          <p className={styles.logoText}>Welcome to</p>
          <img src='/images/signin/logo.svg' alt="Mu Store" className="w-[35vw] sm:w-[15vw] py-1"/>
        </div>
        <img src='/images/signin/door.png' alt="door" className={styles.doorImage} />
        </div></div>
      <div className={styles.formContainer}>
        <h1 className={styles.heading}>Sign in</h1>
        <p className={styles.subHead}>
          Please login to continue to your account.
        </p>

        <div className={styles.floatingForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* have to add .errorInput class to .labelContent when error */}
            {/* <div className={`${styles.labelContent} ${styles.errorInput}`}> */}
            <div className={styles.labelContent}>
              <input
                type="email"
                placeholder=""
                {...register("email")}
                className={styles.floatingInput}
              />
              <label className={styles.floatingLabel}>Mu ID</label>
              {errors.email && (
                <span className={`${styles.textSmall} ${styles.textRed}`}>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className={styles.labelContent}>
              <input
                type="password"
                placeholder=""
                {...register("password")}
                className={styles.floatingInput}
              />
              <label className={styles.floatingLabel}>Password</label>
              {errors.password && (
                <span className={`${styles.textSmall} ${styles.textRed}`}>
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
                <label htmlFor="keepLoggedIn" className={`${"text-[#232323] font-medium" } ${styles.textSmall}`}>
                  Keep me logged in
                </label>
              </div>
              <p className={`${" text-[#132972] cursor-pointer hover:underline"} ${styles.textTiny}`}>
                Forgot Password
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-[#132972] text-white font-inter font-semibold py-[.7rem] rounded-md hover:bg-[#102258] transition duration-200 mt-4"
            >
              <p className={styles.buttonText}>Sign in</p>
            </button>
          </form>
          <div className="mt-1 text-center">
            <div className="text-[#6e6e6e] relative flex justify-center"><hr className="bg-[#D9D9D9] absolute top-[55%] w-[100%]" /><p className="relative bg-white text-[#6e6e6e] font-inter z-10 w-fit p-1">or</p></div>
            <button className="mt-2 w-full bg-white border border-gray-300 text-[#232323] py-[.7rem] rounded-md hover:bg-gray-50 transition duration-300 flex items-center justify-center gap-2 font-inter font-semibold">
              <img src='/images/signin/mu.svg' alt="mulearn" className="h-[1.4rem] translate-y-[5%]"/><p className={styles.buttonText}>Sign in with MuLearn</p>
            </button>
          </div>
          <div className="mt-6 text-center flex justify-center gap-1">
            <p className=" text-gray-600">
              Don't have an account?{" "}
              </p>
            <p
              onClick={() => {
                navigate("/signup");
              }}
              className="text-[#132972] hover:underline cursor-pointer"
            >
              Create one
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
