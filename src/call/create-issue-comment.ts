// Name		: createIssueComment
// Description	: create an issue comment as the app
// Arguments	:
//   - text	: (string) the text string to be written in comment
//   - tagUser	: (string) tag a specific user before the text

import { Probot } from 'probot';
import dedent from 'dedent'

export interface createIssueCommentParams {
  text: string;
  tagUser?: string;
}

export default async function createIssueComment(app: Probot, context: any, {text}: createIssueCommentParams): Promise<void> {
  const comment = context.issue({ body: dedent`${text}` });
  context.octokit.issues.createComment(comment);
}

export async function createIssueCommentTagUser(app: Probot, context: any, {text, tagUser}: createIssueCommentParams): Promise<void> {
  const comment = context.issue({ body: dedent`@${tagUser}: ${text}` });
  context.octokit.issues.createComment(comment);
}
