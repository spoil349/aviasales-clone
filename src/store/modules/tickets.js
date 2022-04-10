export default {
    state: {
        tickets: [],
        segments: [],
    },
    mutations: {
        updateTickets(state, tickets) {
            state.tickets = tickets
        },
        updateSegments(state, segments) {
            state.segments = segments
        },
    },
    actions: {
        async fetchTickets({ commit }, limit = 5) {
            const resTickets= await fetch(`http://localhost:3000/tickets?_limit=${limit}`);
            const tickets = await resTickets.json()

            commit('updateTickets', tickets)
        },
        async fetchSegments({ commit }) {
            const resSegments = await fetch('http://localhost:3000/segments')
            const segments = await resSegments.json()

            commit('updateSegments', segments)
        }
    },
    getters: {
        fetchedTickets(state) {
            return state.tickets;
        },
        allSegments(state) {
            return state.segments;
        },
        currentTicketSegments: (state) => (ids) => {
            return state.segments.filter(segment => ids.includes(segment.id))
        }
    }
}