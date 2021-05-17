import * as React from 'react';

export interface GameControlsProps {
  // The onClick event of a button element has a particular shape (interface) as well.
  reset: React.MouseEventHandler<HTMLElement>;
}

export const GameControls: React.FC<GameControlsProps> = (props) => (
  <div className="controls">
    <button key="reset" onClick={props.reset}>
      Reset
    </button>
  </div>
);
