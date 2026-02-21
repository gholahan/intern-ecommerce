type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  formik: any;
};

const FormInput = ({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  formik,
}: FormInputProps) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;
  const error = errors[name];
  const isTouched = touched[name];

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={values[name] || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`w-full bg-gray-100 px-4 py-2.5 rounded border outline-none transition
          ${isTouched && error ? "border-red-500 ring-2 ring-red-200" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
      />

      {isTouched && error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
