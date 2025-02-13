import { Input } from "@utils/inputs-components/Input";
import { Select } from "@utils/inputs-components/Select";
import { TextArea } from "@utils/inputs-components/TextArea";
import { IssueTypeSelector } from "./IssueTypeSelector";

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
                label="Current Distance"
                name="currentDistance"
                type="number"
                control={control}
                errors={errors.currentDistance}
            />
            <Select
                label="Car"
                placeholder="Select a car"
                name="carId"
                options={[{ value: "1", option: "Renault" }, { value: "2", option: "Wolkswagen" }]}
                control={control}
                errors={errors.carId}
            />
            <TextArea label="Description" name="description" control={control} errors={errors.description} />
            <IssueTypeSelector control={control} errors={errors} />
        </div>
    );
}