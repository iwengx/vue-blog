export const nodeState = [
   'Untracked',
   'unModified',
   'Modified',
   'Staged',
   'committed',
   'remote',
] as const;

type NodeState = typeof nodeState[number];

export interface NodeChild {
   code: string;
   from?: NodeState;
   to: NodeState;
}

export const nodeChildren: NodeChild[] = [
   {
      code: 'new [file]',
      to: 'Untracked',
   },
   {
      code: 'user editted',
      from: 'unModified',
      to: 'Modified',
   },
   {
      code: 'git restore <fileName>',
      from: 'Modified',
      to: 'unModified',
   },
   {
      code: 'git commit -m <message>',
      from: 'committed',
      to: 'Staged',
   },
   {
      code: 'git reset <commitID> --soft',
      from: 'committed',
      to: 'Staged',
   },
   {
      code: 'git reset <commitID> --mixed',
      from: 'committed',
      to: 'Modified',
   },
   {
      code: 'git reset <commitID> --hard',
      from: 'committed',
      to: 'unModified',
   },
   {
      code: 'git push',
      from: 'committed',
      to: 'remote',
   },
   {
      code: 'git add <fileName>',
      from: 'Modified',
      to: 'Staged',
   },
   {
      code: 'git reset <fileName>',
      from: 'Staged',
      to: 'Modified',
   },
];
