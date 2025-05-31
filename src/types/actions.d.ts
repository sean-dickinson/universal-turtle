import type { TurtleState } from './turtle-state'

// TODO: add more actions as needed
export type TurtleAction = 'create' | 'forward' | 'backward' | 'left' | 'right' | 'circle' | 'set_state'

interface TurtleEvent {
  id: string
  action: TurtleAction
  payload: Record<string, any>
}

export interface CreateTurtleEvent extends TurtleEvent {
  action: 'create'
  payload: Partial<TurtleState>
}

export interface MoveTurtleEvent extends TurtleEvent {
  action: 'forward' | 'backward'
  payload: {
    distance: number
  }
}

export interface TurnTurtleEvent extends TurtleEvent {
  action: 'left' | 'right'
  payload: {
    angle: number // in degrees
  }
}

export interface CircleTurtleEvent extends TurtleEvent {
  action: 'circle'
  payload: {
    radius: number // in pixels,
    angle?: number // in degrees, if not provided, defaults to 360 degrees
  }
}

export interface SetStateTurtleEvent extends TurtleEvent {
  action: 'set_state'
  payload: Partial<TurtleState>
}

export type TurtleActionEvent =
  | CreateTurtleEvent
  | MoveTurtleEvent
  | TurnTurtleEvent
  | GotoTurtleEvent
  | SetStateTurtleEvent


