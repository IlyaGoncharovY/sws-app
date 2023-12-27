import React, {ChangeEvent} from 'react';

import {SuperInput} from '../input/SuperInput';
import {LinesListResponseChild, RequestAddNewLineType} from '../../../types';

export type PropertyType = 'rowName' | 'equipmentCosts' | 'estimatedProfit' | 'machineOperatorSalary' | 'mainCosts'

interface IInputGroup {
    isEditing: boolean
    updatedLine: RequestAddNewLineType
    line: LinesListResponseChild
    handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
    handleDoubleClick: () => void
    handleInputChange: (e: ChangeEvent<HTMLInputElement>, property: PropertyType) => void
}

export const InputGroup: React.FC<IInputGroup> =  React.memo(({isEditing,
  updatedLine,
  line,
  handleKeyPress,
  handleDoubleClick,
  handleInputChange,
}) => {

  const properties: PropertyType[] = ['rowName', 'equipmentCosts', 'estimatedProfit', 'machineOperatorSalary', 'mainCosts'];

  return (
    <>
      {properties.map((property) => (
        <SuperInput
          key={property}
          isEditing={isEditing}
          handleDoubleClick={handleDoubleClick}
          updatedLine={updatedLine[property]}
          handleInputChange={(e) => handleInputChange(e, property)}
          handleKeyPress={handleKeyPress}
          line={line[property]}
        />
      ))}
    </>
  );
});
