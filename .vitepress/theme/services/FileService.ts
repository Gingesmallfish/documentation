export interface TimelineEvent {
  date: string;
  description: string;
}

export async function getTimelineEvents(): Promise<TimelineEvent[]> {
  // 模拟获取文件创建时间的逻辑
  return [
    { date: '2023-01-01', description: '创建项目' },
    { date: '2023-02-15', description: '添加新功能' },
    { date: '2023-03-10', description: '修复Bug' },
  ];
}