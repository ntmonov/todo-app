import { FormControl } from "@angular/forms";

export interface TodoFormGroup {
  title: FormControl<string>;
  content: FormControl<string>;
}
