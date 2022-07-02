import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
		watch,
  } = useForm();

	const confirmPassowrd = watch(["password","confirmPassword"]);

	function validatePassowrd(){
		console.log(confirmPassowrd[0] == confirmPassowrd[1]);
		return confirmPassowrd[0] == confirmPassowrd[1]? true: false
	}
	console.log(errors);
  const onSubmit = (data) => {
    
    // API REQUEST
  };

  const hobbies = [
    {
      value: 1,
      label: "Gaming",
    },
    {
      value: 2,
      label: "Driving bike",
    },
    {
      value: 3,
      label: "Sliding",
    },
    {
      value: 4,
      label: "Flying",
    },
  ];

  const genders = [
    {
      value: 0,
      label: "female",
    },
    {
      value: 1,
      label: "male",
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <h2 className="my-5">Create a new account</h2>
      <form className="border p-5 w-50" onSubmit={handleSubmit(onSubmit)}>
        <div className="email-wrapper input-group">
          <input
            className="form-control"
            placeholder="User email"
            type="text"
            {...register("user_email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.user_email && errors.user_email.type === "required" && (
            <p className="text-danger my-2">Email is required</p>
          )}
          {errors.user_email && errors.user_email.type === "pattern" && (
            <p className="text-danger my-2">Enter a valid email</p>
          )}
        </div>

        <div className="my-5 input-group">
          <Controller
            className="w-100"
            name="selectGender"
            control={control}
						rules={{ required: true }}
            render={({ field }) => (
              <ReactSelect
                {...field}
                options={genders}
                isSearchable
                placeholder="Select geneder"
								
              />
							
            )}
						
          />
					{errors.selectGender && errors.selectGender.type === "required" && (
							<p className="text-danger my-2">Gender is required</p>
						)}
        </div>


        <div className="my-5 input-group">
          <Controller
            className="w-100"
            name="selectHobby"
            control={control}
						
            render={({ field }) => (
              <ReactSelect
                {...field}
                options={hobbies}
                isMulti
                isSearchable
                placeholder="Select hobby"
								
              />
            )}
          />
        </div>

        <div className="input-group">
          <input
            className="form-control"
            placeholder="Password"
						name = "password"
            type="password"
            {...register("password", {required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/})}
          />
					{errors.password && errors.password.type === "required" && (
            <p className="text-danger my-2">password is required</p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p className="text-danger my-2">password needs to be at least 1 upper case, 1 lower case, 1 number</p>
          )}
        </div>

				<div className="input-group pt-5">
          <input
            className="form-control"
            placeholder="Password"
						name = "confirmPassword"
            type="password"
            {...register("confirmPassword", {required: true, 
							validate:validatePassowrd})}
          />
					{errors.confirmPassword && errors.confirmPassword.type === "validate" && (
            <p className="text-danger my-2">password does not match</p>
          )}
         
        </div>

        <div className="submit-wrapper my-5 d-flex justify-content-center">
          <button className="btn btn-primary btn-lg w-100" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
