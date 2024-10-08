export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      company: {
        Row: {
          company_id: number
          created_at: string
          name: string
        }
        Insert: {
          company_id?: number
          created_at?: string
          name: string
        }
        Update: {
          company_id?: number
          created_at?: string
          name?: string
        }
        Relationships: []
      }
      event: {
        Row: {
          company_id: number
          created_at: string
          description: string | null
          event_id: number
          finish_date: string
          name: string
          start_date: string
        }
        Insert: {
          company_id: number
          created_at?: string
          description?: string | null
          event_id?: number
          finish_date: string
          name: string
          start_date: string
        }
        Update: {
          company_id?: number
          created_at?: string
          description?: string | null
          event_id?: number
          finish_date?: string
          name?: string
          start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: 'event_company_id_fkey'
            columns: ['company_id']
            isOneToOne: false
            referencedRelation: 'company'
            referencedColumns: ['company_id']
          }
        ]
      }
      lodging: {
        Row: {
          address: string
          city: string
          created_at: string
          event_id: number | null
          lodging_id: number
          name: string | null
        }
        Insert: {
          address: string
          city: string
          created_at?: string
          event_id?: number | null
          lodging_id?: number
          name?: string | null
        }
        Update: {
          address?: string
          city?: string
          created_at?: string
          event_id?: number | null
          lodging_id?: number
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'lodging_event_id_fkey'
            columns: ['event_id']
            isOneToOne: false
            referencedRelation: 'event'
            referencedColumns: ['event_id']
          }
        ]
      }
      lodging_entry_exit: {
        Row: {
          created_at: string
          last_entry: string | null
          last_exit: string | null
          lodging_entry_exit_id: number
          lodging_id: number
        }
        Insert: {
          created_at?: string
          last_entry?: string | null
          last_exit?: string | null
          lodging_entry_exit_id?: number
          lodging_id: number
        }
        Update: {
          created_at?: string
          last_entry?: string | null
          last_exit?: string | null
          lodging_entry_exit_id?: number
          lodging_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'lodging_entry_exit_lodging_id_fkey'
            columns: ['lodging_id']
            isOneToOne: false
            referencedRelation: 'lodging'
            referencedColumns: ['lodging_id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never
