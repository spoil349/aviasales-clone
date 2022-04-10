export default {
    state: {
        tickets: [],
        segments: [],
        companies: [],
    },
    mutations: {
        updateTickets(state, tickets) {
            state.tickets = tickets
        },
        updateSegments(state, segments) {
            state.segments = segments
        },
        updateCompanies(state, companies) {
            state.companies = companies
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
        },
        async fetchCompanies({ commit }) {
            const resCompanies = await fetch('http://localhost:3000/companies')
            const companies = await resCompanies.json()

            commit('updateCompanies', companies)
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
        },
        companyLogoName: (state) => (ticketCompanyId) => {
            return state.companies.map(company => {
                if (company.id === ticketCompanyId) {
                    return company.logo
                }
            }).join('')
        }
    }
}