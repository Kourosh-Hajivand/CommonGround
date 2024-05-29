export enum Environment {
  Test = 'test',
  Local = 'local',
  Stage = 'stage',
  Prod = 'prod',
}

export const ByPassEnvironments = [Environment.Local, Environment.Stage];

/**
 * Returns true if the environment is bypassable
 */
export const isEnvironmentBypassable = (env: Environment) =>
  ByPassEnvironments.includes(env);
