/*
 * Copyright (c) 2020 the Octant contributors. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// GENERATED: do not edit!

import { ComponentFactory, FactoryMetadata } from './component-factory';
import { Component } from './component';

export interface EditorConfig {
  value: string;
  readOnly: boolean;
  metadata: { [key: string]: string };
  submitAction?: string;
  submitLabel?: string;
}

export interface EditorOptions {
  submitAction?: string;
  submitLabel?: string;
}

interface EditorParameters {
  value: string;
  readOnly: boolean;
  metadata: { [key: string]: string };
  options?: EditorOptions;
  factoryMetadata?: FactoryMetadata;
}

export class EditorFactory implements ComponentFactory<EditorConfig> {
  private readonly value: string;
  private readonly readOnly: boolean;
  private readonly metadata: { [key: string]: string };
  private readonly submitAction: string | undefined;
  private readonly submitLabel: string | undefined;
  private readonly factoryMetadata: FactoryMetadata | undefined;

  constructor({
    value,
    readOnly,
    metadata,
    options,
    factoryMetadata,
  }: EditorParameters) {
    this.value = value;
    this.readOnly = readOnly;
    this.metadata = metadata;
    this.factoryMetadata = factoryMetadata;

    if (options) {
      this.submitAction = options.submitAction;
      this.submitLabel = options.submitLabel;
    }
  }

  toComponent(): Component<EditorConfig> {
    return {
      metadata: {
        type: 'editor',
        ...this.factoryMetadata,
      },
      config: {
        value: this.value,
        readOnly: this.readOnly,
        metadata: this.metadata,

        ...(this.submitAction && { submitAction: this.submitAction }),
        ...(this.submitLabel && { submitLabel: this.submitLabel }),
      },
    };
  }
}
