import { IconButton } from "@/components/icon-button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { Link, Copy } from "lucide-react";

export function InviteLinkInput(){
    return (
      <InputRoot>
        <InputIcon>
          <Link className="size-5" />
        </InputIcon>
        <InputField
          readOnly
          defaultValue="http://localohost:3000/invite/7543cwfm943u"
        />

        <IconButton className="-mr-2">
          <Copy className="size-5" />
        </IconButton>
      </InputRoot>
    )
}