import { Input } from "@utils/inputs-components/Input";
import { Select } from "@utils/inputs-components/Select";
import { TextArea } from "@utils/inputs-components/TextArea";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IssuesForm = ({ control, errors }: { control: any, errors: any }) => {
    return (
        <div className="issue-form">
            <Input
                label="Name"
                name="name"
                control={control}
                errors={errors.name}
            />
            <Input
                label="Model"
                name="modelName"
                control={control}
                errors={errors.modelName}
            />
            <Input
                label="Kilometers Traveled"
                name="km"
                type="number"
                control={control}
                errors={errors.km}
            />
            <Select label="Car" name="car" options={[{id: 1, name: "Renault"}]} control={control} errors={errors} />
            <TextArea label="Description" name="description" control={control} errors={errors} />
        </div>
    );
}