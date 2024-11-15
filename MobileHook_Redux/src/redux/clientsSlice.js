import { createSlice } from '@reduxjs/toolkit';

const initialState={
  dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
  dataLoadError: null,
  data: null,
}

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {

    updateLoadState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },

    updateData: (state,action) => {
      state.data = action.payload;
    },

    updateClient: (state, action) => {
        state.data.map( (client) => {
          if (client.id === action.payload.id) {
            client.fam = action.payload.fam;
            client.im = action.payload.im;
            client.otch = action.payload.otch;
            client.balance = action.payload.balance;
          }
        }
      )
    },

    deleteClient: (state, action) => {
      state.data = state.data.filter ( (client) => client.id !== action.payload)
    },

    addNewClient: (state, action) => {
      state.data.push(action.payload)
    },

    // filterClients: (state, action) => {
    //   switch (action.payload){
    //     case 'active' : 
    //     state.data = state.data.filter ((client) => client.balance > 0) 
    //     break;

    //     case 'block' : state.data = state.data.filter ((client) => client.balance <=0 )
    //     break;

    //     // case 'all' : state.data;
        
    //   }
    // }

  },
});

export const { updateLoadState, updateData, updateClient, deleteClient, addNewClient} = clientsSlice.actions;

export default clientsSlice.reducer;