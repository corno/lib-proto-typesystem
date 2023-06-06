import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<null> = {
    'imports': d({}),
    'glossary parameters': d({}),
    'root': {
        'types': d({
            "Aggregated Type Parameters": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({})]]
            },
            "Function Declaration": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "context": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "parameters": {
                        'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                    "type parameters": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Parameters",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Import": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "parent import": <g_glossary.T.Type<null>>['group', d({
                        "key": {
                            'type': <g_glossary.T.Type<null>>['string', null],
                        },
                        "referent": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Imports",
                                'tailXX': a([
                                    "D",
                                ]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "sibling": <g_glossary.T.Type<null>>['group', d({
                        "key": {
                            'type': <g_glossary.T.Type<null>>['string', null],
                        },
                        "referent": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Nested Namespace",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                })]
            },
            "Imports": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                    'context': ['local', null],
                    'typeXX': "Import",
                    'tailXX': a([]),
                    'type arguments': d({}),
                }]]]
            },
            "Namespace": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "namespaces": {
                        'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Nested Namespace",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                    "parameters": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Parameters",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "types": {
                        'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Namespace Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "start": {
                        'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                            "import": <g_glossary.T.Type<null>>['group', d({
                                "arguments": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type Arguments",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "namespace": {
                                    'type': <g_glossary.T.Type<null>>['group', d({
                                        "key": {
                                            'type': <g_glossary.T.Type<null>>['string', null],
                                        },
                                        "referent": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Imports",
                                                'tailXX': a([
                                                    "D",
                                                ]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })],
                                },
                                "tail": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Namespace Selection Tail",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                            "local": <g_glossary.T.Type<null>>['group', d({
                                "namespace": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Namespace Selection Tail",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                        })],
                    },
                })]
            },
            "Namespace Selection Tail": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "arguments": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Arguments",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "namespace": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                            "referent": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Namespace",
                                    'tailXX': a([
                                        "namespaces",
                                        "D",
                                    ]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })],
                    },
                    "tail": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Namespace Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Nested Namespace": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "imports": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Imports",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "namespace": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Namespace",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Root": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                    'context': ['local', null],
                    'typeXX': "Namespace",
                    'tailXX': a([]),
                    'type arguments': d({}),
                }]]
            },
            "Type": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "array": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Type",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "atom": <g_glossary.T.Type<null>>['taggedUnion', d({
                        "boolean": <g_glossary.T.Type<null>>['group', d({})],
                        "null": <g_glossary.T.Type<null>>['group', d({})],
                        "number": <g_glossary.T.Type<null>>['group', d({})],
                        "string": <g_glossary.T.Type<null>>['group', d({})],
                    })],
                    "computed": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Type",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "dictionary": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Type",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "group": <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                        "mutable": {
                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({})]],
                        },
                        "type": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Type",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })]],
                    "initialization function": <g_glossary.T.Type<null>>['group', d({
                        "declaration": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Function Declaration",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "return type": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Type",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "lookup": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Type",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "optional": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Type",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "procedure": <g_glossary.T.Type<null>>['group', d({
                        "declaration": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Function Declaration",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "selection function": <g_glossary.T.Type<null>>['group', d({
                        "declaration": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Function Declaration",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                        "return type": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Type",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "tagged union": <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Type",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]]],
                    "type parameter": <g_glossary.T.Type<null>>['group', d({
                        "key": {
                            'type': <g_glossary.T.Type<null>>['string', null],
                        },
                        "referent": {
                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Aggregated Type Parameters",
                                'tailXX': a([
                                    "D",
                                ]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "type reference": <g_glossary.T.Type<null>>['taggedUnion', d({
                        "cyclic sibling": <g_glossary.T.Type<null>>['group', d({
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                            "referent": {
                                'type': <g_glossary.T.Type<null>>['computed', <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Type",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]]],
                            },
                        })],
                        "external": <g_glossary.T.Type<null>>['group', d({
                            "namespace path": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Namespace Selection",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                            },
                            "type": {
                                'type': <g_glossary.T.Type<null>>['group', d({
                                    "key": {
                                        'type': <g_glossary.T.Type<null>>['string', null],
                                    },
                                    "referent": {
                                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                            'context': ['local', null],
                                            'typeXX': "Namespace",
                                            'tailXX': a([
                                                "types",
                                                "D",
                                            ]),
                                            'type arguments': d({}),
                                        }]],
                                    },
                                })],
                            },
                        })],
                        "sibling": <g_glossary.T.Type<null>>['group', d({
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                            "referent": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Type",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })],
                    })],
                })]
            },
            "Type Arguments": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                    "constraints": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "parameter": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Type Parameters",
                                    'tailXX': a([
                                        "local",
                                        "D",
                                    ]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })],
                    },
                    "content": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "type": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Type",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })],
                    },
                })]]
            },
            "Type Parameters": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "aggregated": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Aggregated Type Parameters",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "local": {
                        'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({})]],
                    },
                })]
            },
        }),
        'namespaces': d({
            "Aggregated Type Parameters": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Function Declaration": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "context": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "parameters": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "type parameters": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Import": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "parent import": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "sibling": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Imports": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({}),
                    },
                }),
            },
            "Namespace": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "namespaces": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "parameters": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "types": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Namespace Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "start": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "import": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "arguments": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "namespace": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "tail": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "O": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "local": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "namespace": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Namespace Selection Tail": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "arguments": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "namespace": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "tail": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Nested Namespace": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "imports": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "namespace": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Root": {
                'types': d({}),
                'namespaces': d({}),
            },
            "Type": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "array": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "atom": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "boolean": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "null": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "number": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "string": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "computed": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "dictionary": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "group": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "mutable": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "O": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "G": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                    "type": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "initialization function": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "declaration": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "return type": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "lookup": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "optional": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "procedure": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "declaration": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "selection function": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "declaration": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "return type": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "tagged union": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "type parameter": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "type reference": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "cyclic sibling": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "external": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "namespace path": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "type": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "sibling": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Type Arguments": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({
                                    "type": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Type Parameters": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "aggregated": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "local": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}