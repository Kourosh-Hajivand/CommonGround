import { FormikProps } from "formik";
import React from "react";
import ReactSelect, { ActionMeta, GetOptionLabel, GetOptionValue, MultiValue, PropsValue, SingleValue } from "react-select";
type Props = {
    options?: { label: string, value: string }[],
    isMulti?: boolean,
    defaultValue?: PropsValue<{ value: string; label: string; }> | undefined,
    formik: FormikProps<object>,
    name: string,
    getOptionValue?: GetOptionValue<{ value: string, label: string }>,
    isDisabled?: boolean,
    getOptionLabel?: GetOptionLabel<{ value: string, label: string }>,
    label?: string,
    isLoading?: boolean,
    onChange?: (newValue: MultiValue<{ value: string; label: string; }> | SingleValue<{ value: string; label: string; }>, actionMeta: ActionMeta<{ value: string; label: string; }>) => void,
    onMenuScrollToBottom?: () => void,
    required?: boolean,
    placeholder?: string,
    backgroundColor?: string,
    className?: string,
    width?: string
}
const Select = ({
    options,
    isMulti,
    defaultValue,
    formik,
    name="",
    getOptionValue,
    isDisabled,
    getOptionLabel,
    label,
    isLoading,
    onChange,
    onMenuScrollToBottom,
    required,
    placeholder,
    backgroundColor = "#fff",
    className,
    width = "100%"
}: Props) => {
    const styles = {
         // @ts-ignore 
        control: (base, state) => ({
            ...base,
            width,
            overflow: "auto",
            // @ts-ignore 
            border: state.isFocused ? "1px solid #fff" : formik?.errors[name] ? "1px solid #fff" : "1px solid #fff",
            backgroundColor,
            height: isMulti ? "fit-content" : "41.58px",
            borderRadius: "0px",
            fontSize: "12px !important",
            fontFamily: "regular",
            // This line disable the blue border 
            boxShadow: state.isFocused ? 0 : 0,
            "&:hover": {
                border: state.isFocused ? "1px solid #fff" : "1px solid #fff",
            },

        }),
    };

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="flex items-center gap-1 pb-1">
                    <span className="text-zinc-900 text-xs font-medium pr-1 pb-[1px] inline-block">{label}</span>
                    {required && <span className="text-red-400 text-base font-medium ">*</span>}
                </label>
            )}
            <ReactSelect
                menuPosition="fixed"
                defaultValue={defaultValue}
                isMulti={isMulti}
                // @ts-ignore 
                value={formik?.values[name]}
                isLoading={isLoading}
                placeholder={<span className="!text-gray-400 whitespace-nowrap !text-xs">{placeholder}</span>}
                styles={styles}
                options={options}
                onMenuScrollToBottom={onMenuScrollToBottom}
                getOptionLabel={getOptionLabel}
                getOptionValue={getOptionValue}

                onChange={onChange ? onChange : (value) => formik.setFieldValue(name, value)}
                name={name}
                noOptionsMessage={() => <span className="text-xs font-bold">No options</span>}
                isDisabled={isDisabled}
                isClearable={false}


            />
            <span className="block font-light mt-[1px] text-[11px] text-red-500 pr-1">
                {/* @ts-ignore */}
                {formik?.errors[name] ? formik?.errors[name] : null}

            </span>
        </div>
    );
};

export default Select;