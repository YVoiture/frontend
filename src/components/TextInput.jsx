const TextInput = ({ label, name, value, onChange, type = "text", placeholder, required = true }) => (
    <div className="w-full">
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
        <input 
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-600 block w-full p-2.5" 
            placeholder={placeholder}
            required={required}
        />
    </div>
);

export default TextInput;