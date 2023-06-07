
const FormField = ({ label, type, name, placeholder, register, errors }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input type={type} id={name} name={name} placeholder={placeholder} {...register(name)} />
    {errors[name] && <p className="error" style={{margin:"0"}}>{errors[name].message}</p>}
  </>
);

export default FormField;