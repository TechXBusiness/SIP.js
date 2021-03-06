import { C } from "../../Constants";
import { InviteDialog } from "../dialogs";
import { OutgoingNotifyRequest, OutgoingRequestDelegate, RequestOptions } from "../messages";
import { NonInviteClientTransaction } from "../transactions";
import { UserAgentClient } from "./user-agent-client";

export class NotifyUserAgentClient extends UserAgentClient implements OutgoingNotifyRequest {
  constructor(
    dialog: InviteDialog,
    delegate?: OutgoingRequestDelegate,
    options?: RequestOptions
  ) {
    const message = dialog.createOutgoingRequestMessage(C.NOTIFY, options);
    super(NonInviteClientTransaction, dialog.userAgentCore, message, delegate);
  }
}
