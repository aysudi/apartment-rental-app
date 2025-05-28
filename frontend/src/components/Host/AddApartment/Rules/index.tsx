import { useState } from "react";

const Rules = ({ formik }: { formik: any }) => {
  const [ruleInput, setRuleInput] = useState("");

  const handleAddRule = () => {
    if (ruleInput.trim()) {
      formik.setFieldValue("rules", [...formik.values.rules, ruleInput.trim()]);
      setRuleInput("");
    }
  };

  return (
    <div className="relative">
      <label
        htmlFor="rules"
        className="block text-xl font-semibold text-gray-800 mb-3"
      >
        Rules
      </label>
      <div className="space-y-2">
        {formik.values.rules.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pb-2">
            {formik.values.rules.map((rule: string, index: string) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 px-3 bg-gray-100 rounded-2xl text-sm border border-[#FF9A1E]"
              >
                <span className="text-sm">{rule}</span>
              </div>
            ))}
          </div>
        )}
        <input
          type="text"
          value={ruleInput}
          onChange={(e) => setRuleInput(e.target.value)}
          className={`w-full p-4 border-2 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E] ${
            formik.touched.rules && formik.errors.rules
              ? "border-red-500"
              : "border-gray-300"
          }`}
          placeholder="Add a rule (e.g., No Pets, No Smoking, etc.)"
        />
        <button
          type="button"
          onClick={handleAddRule}
          className="bg-[#FF9A1E] text-white py-2 px-6 rounded-full mt-2 hover:bg-[#e07b0b] transition duration-300 cursor-pointer"
        >
          Add Rule
        </button>
      </div>
    </div>
  );
};

export default Rules;
