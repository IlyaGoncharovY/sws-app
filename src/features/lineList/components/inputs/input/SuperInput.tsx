import React, { ChangeEvent } from 'react';

interface ISuperInput {
    handleDoubleClick: () => void;
    isEditing: boolean;
    updatedLine: string | number;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    line: string | number;
    handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const SuperInput: React.FC<ISuperInput> = ({
  handleDoubleClick,
  isEditing,
  updatedLine,
  handleInputChange,
  line,
  handleKeyPress,
}) => {
  return (
    <td onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type="text"
          value={updatedLine}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      ) : (
        line
      )}
    </td>
  );
};
