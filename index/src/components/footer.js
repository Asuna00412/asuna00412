import React from 'react'

class Footer extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <section className="col-md-12 card-wrapper">
                <div className="footer">博客为Asuna个人使用，最后更新于<span className="date">2022-02-14</span></div>
            </section>
        )
    }
}
export default Footer
