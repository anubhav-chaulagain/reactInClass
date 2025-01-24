import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom"

// Define the validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  address: yup.string().required("Address is required"),
  username: yup.string().required("Username is required"),
  contact: yup.string().required("Contact is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .positive("Age must be positive")
    .integer("Age must be an integer"),
});

const UsersForm = ({updateNewData}) => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
        console.log("Form data:", data);
        updateNewData(data);
        navigate('/usersTable'); // Navigate after updating data
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

        {/* Username Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Username</label>
          <input type="text" {...register("username")} />
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            {errors.username?.message}
          </p>
        </div>

        {/* Address Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Address</label>
          <input type="text" {...register("address")} />
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            {errors.address?.message}
          </p>
        </div>

        {/* Contact Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Contact</label>
          <input type="text" {...register("contact")} />
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            {errors.contact?.message}
          </p>
        </div>

        {/* Age Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Age</label>
          <input type="text" {...register("age")} />
          <p style={{ color: "red", fontSize: "0.8rem" }}>
            {errors.age?.message}
          </p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UsersForm;
