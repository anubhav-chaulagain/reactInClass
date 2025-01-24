import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
 
// Define the validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
 
const Validation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
 
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
 
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>React Hook Form with Yup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Name</label>
          <input {...register("name")} />
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            {errors.name?.message}
          </p>
        </div>
 
        {/* Email Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <input type="email" {...register("email")} />
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            {errors.email?.message}
          </p>
        </div>
 
        {/* Password Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Password</label>
          <input type="password" {...register("password")} />
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            {errors.password?.message}
          </p>
        </div>
 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
 
export default Validation;