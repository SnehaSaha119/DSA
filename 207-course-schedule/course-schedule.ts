function canFinish(numCourses: number, prerequisites: number[][]): boolean {

  const adj: number[][] = Array.from({ length: numCourses }, () => []);
  const incoming: number[] = new Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    adj[prereq].push(course);
    incoming[course]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (incoming[i] === 0) {
      queue.push(i);
    }
  }

  let completedCourses = 0;

  while (queue.length > 0) {
    const course = queue.shift() as number;
    completedCourses++;

    for (const nextCourse of adj[course]) {
      incoming[nextCourse]--;
      if (incoming[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }
  
  return completedCourses === numCourses;
}