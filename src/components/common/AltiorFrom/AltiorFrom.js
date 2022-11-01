import {createField} from "@altiore/form";


const FieldView = ({fieldProps, inputProps, label}) => {
    return (
        <div>
            <label>{label}</label>
            <textarea {...inputProps} />
            <span>{fieldProps.error}</span>
        </div>
    );
};

export const Field = createField(FieldView);
