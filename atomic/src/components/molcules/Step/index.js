import React, { useState } from 'react'
import { Steps, Button, message } from 'antd'
import './index.css'
import Atom from 'assets/images/atom.png'
import Molcule from 'assets/images/molcule.png'
import Organisms from 'assets/images/organisms.png'
import Template from 'assets/images/template.png'
import Page from 'assets/images/page.png'
const { Step } = Steps

const steps = [
  {
    title: 'Atom',
    content: (
      <>
        <img src={Atom} alt='Atom' />
        Atom はできる限り一番小さい Component のことをいいます。
        <br />
        例として button, title, input, event color pallets, animations, font
        などがあります。
        <br />
        これらをどんな Context でも、(Global もしくは他の Componet
        の中で)使うことができます。
      </>
    )
  },
  {
    title: 'Molcule',
    content: (
      <>
        <img src={Molcule} alt='Molcule' />
        Molcule は 1 個もしくは 1 個以上の Atom の集合です。
        <br />
        ここから我々は複雑な Component の設計を行います。
        <br />
        Molcule はそれなりの関数や Action を持つことはないですが、なかの Atom
        を使い Property、Function をつけることをします。
      </>
    )
  },
  {
    title: 'Organism',
    content: (
      <>
        <img src={Organisms} alt='Organisms' />
        Organism はまた Molcule の集合。
        <br />
        もっと巧みのある Interface となります。
        <br />
        この時点で Component は Final 的な模様を持ちますが、まだ独立した
        Component であり、どんな Context
        でも使うことができるようにするのが大切です。
      </>
    )
  },
  {
    title: 'Template',
    content: (
      <>
        <img src={Template} alt='Template' />
        Template はまた別の領域かもしれません。
        <br />
        Template は Component 作成ではなく、Component
        の文脈(Context)を考えます。
        <br />
        Organisms
        の関係や、配置、位置、整列、パターンなどを考慮するところでなんの
        Style、Color ももちません。
      </>
    )
  },
  {
    title: 'Page',
    content: (
      <>
        <img src={Page} alt='Page' />
        最終的に Template 内で構成された Component により Page が生まれます。
        <br />
        この段階で Design システムの効率確認、分析などを行います。
        <br />
        各要素が十分に独立性を持っているか、もっと小さく分解できるかなどを考慮します。
      </>
    )
  }
]

const Order = () => {
  const [current, setCurrent] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
    setIsDone(false)
  }

  const done = () => {
    if (!isDone) message.success('終了です!')
    setIsDone(true)
  }

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className='steps-content'>{steps[current].content}</div>
      <div className='steps-action'>
        {current < steps.length - 1 && (
          <Button type='primary' onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type='primary' onClick={() => done()}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  )
}

export default Order
