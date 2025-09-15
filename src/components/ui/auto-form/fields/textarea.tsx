import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/i18n/client";
import AutoFormLabel from "../common/label";
import AutoFormTooltip from "../common/tooltip";
import { AutoFormInputComponentProps } from "../types";

export default function AutoFormTextarea({
  label,
  isRequired,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) {
  const { showLabel: _showLabel, ...fieldPropsWithoutShowLabel } = fieldProps;
  const showLabel = _showLabel === undefined ? true : _showLabel;
  const t = useI18n();
  return (
    <FormItem className="h-full">
      {showLabel && (
        <AutoFormLabel
          label={fieldConfigItem?.label || label}
          isRequired={isRequired}
        />
      )}
      <FormControl>
        <Textarea
          {...fieldPropsWithoutShowLabel}
          placeholder={t("your_message_here")}
          style={{
            height: "24rem",
          }}
        />
      </FormControl>
      <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
      <FormMessage />
    </FormItem>
  );
}
