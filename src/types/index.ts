export interface Target {
    id: number;          
    title: string;       
    description: string; 
    isComplete: boolean;
  }
  
  // Interface para os TODOs
  export interface Todo {
    id: number;           
    title: string;        
    description?: string; 
    isComplete: boolean;  
    targetId: number;
  }
  