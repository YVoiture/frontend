const SelectInput = ({ label, name, value, onChange, options }) => (
    <div className="w-full">
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
        <select id={name} name={name} value={value} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-rose-500 focus:border-rose-500 block w-full p-2.5">
            <option>Choisissez une option</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
);

export default SelectInput;