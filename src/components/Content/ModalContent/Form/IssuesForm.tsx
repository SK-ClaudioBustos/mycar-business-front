import { Input } from "@utils/inputs-components/Input";
import { TextArea } from "@utils/inputs-components/TextArea";
import CarsSelector from "./CarsSelector";
import { IssueTypeSelector } from "./IssueTypeSelector";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function IssuesForm({ control, errors }: { control: any, errors: any }) {
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
            <CarsSelector control={control} errors={errors} />
            <TextArea label="Description" name="description" control={control} errors={errors.description} />
            <IssueTypeSelector control={control} errors={errors} />
        </div>
    );
}