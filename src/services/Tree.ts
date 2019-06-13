export interface TreeData {
  nodes: Node[]
}

export interface Node {
  name: string;
  key: string;
  nodes: Node[];
}

// export const getTreeData = async (): Promise<AxiosResponse<TreeData>> => {
//   // const res =  await axios.get('http://www.mocky.io/v2/5d01aafa3100006600ab2980');
//   // const res =  await axios.get('http://www.mocky.io/v2/5d01b6ca3100002900ab29aa');
//   // const res =  await axios.get('http://www.mocky.io/v2/5d01b8033100005e00ab29b1');

//   return res;
// }

export const getTreeData = ():TreeData => {
  return mockTreeData;
}

const mockTreeData: TreeData = {
  nodes: [
    {
      name: 'Documents',
      key: 'Documents',
      nodes: [
        {
          name: 'Folder 1',
          key: 'Folder 1',
          nodes: [
            {
              name: 'Subfolder 1A',
              key: 'Subfolder 1A',
              nodes: [],
            },
            {
              name: 'Subfolder 1B',
              key: 'Subfolder 1B',
              nodes: [
                {
                  name: 'Subfolder 1B-1',
                  key: 'Subfolder 1B-1',
                  nodes: [],
                },
              ],
            },
          ],
        },
        {
          name: 'Folder 2',
          key: 'Folder 2',
          nodes: [
            {
              name: 'Subfolder 2A',
              key: 'Subfolder 2A',
              nodes: [],
            },
            {
              name: 'Subfolder 2B',
              key: 'Subfolder 2B',
              nodes: [],
            },
            {
              name: 'Subfolder 2C',
              key: 'Subfolder 2C',
              nodes: [],
            },
          ],
        },
        {
          name: 'Folder 3',
          key: 'Folder 3',
          nodes: [],
        },
      ],
    }
  ],
};
