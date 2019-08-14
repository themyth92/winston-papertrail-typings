import * as winston from 'winston';
import * as Transport from 'winston-transport';

interface PapertrailTransportOptions {
  host: string
  port: number
  disableTls: boolean
  level: keyof winston.config.AbstractConfigSetLevels
  levels: winston.config.AbstractConfigSetLevels
  hostname: string
  program: string
  facility: string
  logFormat: string
  colorize: boolean
  inlineMeta: boolean
  handleExceptions: boolean
  flushOnClose: boolean
  depth: number
  attemptsBeforeDecay: number
  maximumAttempts: number
  connectionDelay: number
  maxDelayBetweenReconnection: number
  maxBufferSize: number
}

interface PapertrailTransportInstance extends Transport {
  new(options?: PapertrailTransportOptions): PapertrailTransportInstance
}

declare module 'winston-papertrail' {
  const Papertrail: PapertrailTransportInstance
}
